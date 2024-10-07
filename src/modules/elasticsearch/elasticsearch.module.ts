// src/elasticsearch/elasticsearch.service.ts
import { Injectable } from '@nestjs/common';
import { ElasticsearchService as ESService } from '@nestjs/elasticsearch';

@Injectable()
export class ElasticsearchService {
  constructor(private readonly esService: ESService) {}

  async indexDocument(index: string, document: any) {
    return this.esService.index({
      index,
      body: document,
    });
  }

  async search(index: string, query: any) {
    return this.esService.search({
      index,
      body: query,
    });
  }
}
