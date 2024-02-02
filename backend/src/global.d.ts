declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      MONGO_URL: string;
      SECRET_KEY : string;
    }
  }
}

export {};
