import type { IStudent, IStudentListResponse } from "../interfaces/domains/i-student";
import type { IDocument, IStudentDocument, IStudentDocumentListResponse } from "../interfaces/domains/i-student-document";
import { HttpClient } from "./http-client";
import cache from 'memory-cache';

const API_DOMAIN: string = import.meta.env.VITE_API_DOMAIN ?? ''

export class Api extends HttpClient {
  private static classInstance?: Api;

  private constructor() {
    super(API_DOMAIN);
  }

  public checkCache = (key: string) => {
    return cache.get(key);
  };

  public cacheResponse = (key: string, data: any) => {
    const cachedResponse = this.checkCache(key);
    if (cachedResponse) cache.del(key);
    const hours = 1;
    cache.put(key, data, hours * 1000 * 60 * 60);
    return data;
  };

  public cachedFetch = async <T>(
    key: string,
    url: string,
    params?: any,
    refetch = false
  ): Promise<T> => {
    const cachedResponse = this.checkCache(key);
    if (cachedResponse && !refetch) {
      return cachedResponse;
    } else {
      try {
        const response = await this.get<T>(url, {
          params,
        });
        this.cacheResponse(key, response);
        return response;
      } catch (error) {
        console.error(error);
        return error as any;
      }
    }
  };

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new Api();
    }

    return this.classInstance;
  }


  public async getStudents() {
    const key = 'getStudents';
    const url = `/users`;
    return await this.cachedFetch<IStudentListResponse>(key, url);
  }

  public async getStudentDetail(studentId: string) {
    const key = `getStudentDetail${studentId}`;
    const url = `/users/${studentId}`;
    return await this.cachedFetch<IStudent>(key, url);
  }

  public async getStudentDocs(studentId: string) {
    const key = `getStudentDocs${studentId}`;
    const url = `/posts?userId=${studentId}`;
    return await this.cachedFetch<IStudentDocumentListResponse>(key, url);
  }

  public async createDocument(studentId: string, doc: IDocument) {
    const url = '/posts';
    return await this.post<IStudentDocument>(url, {
      userId: studentId,
      title: doc.title,
      body: doc.body,
    })
  }
}