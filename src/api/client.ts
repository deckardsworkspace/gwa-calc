import { AccountApi, Configuration, CourseApi, GradesApi, type Middleware, TermApi } from '.';
import { API_HOST } from '@/utils/constants';

const createRequestHeaders = (otherHeaders: HeadersInit | undefined): HeadersInit => {
  const authToken = localStorage.getItem('authToken');

  return {
    ...(otherHeaders ?? {}),
    'Content-Type': 'application/json',
    ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
  };
};

const addHeadersMiddleware = (): Middleware => {
  return {
    pre: async (context) => {
      context.init.headers = createRequestHeaders(context.init.headers);
      return { url: context.url, init: context.init };
    },
  };
};

class GWACalcApiClient {
  private config: Configuration;
  public accountApi: AccountApi;
  public courseApi: CourseApi;
  public gradesApi: GradesApi;
  public termApi: TermApi;

  constructor(basePath: string) {
    this.config = new Configuration({
      basePath,
      middleware: [addHeadersMiddleware()],
      credentials: 'include',
    });

    this.accountApi = new AccountApi(this.config);
    this.courseApi = new CourseApi(this.config);
    this.gradesApi = new GradesApi(this.config);
    this.termApi = new TermApi(this.config);
  }
}

const apiClient = new GWACalcApiClient(API_HOST);
export default apiClient;
