import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class Utility {
  constructor(private apiService: ApiService) {}

  async getTablesForArea(idArea: number) {
    const response = await this.apiService.getAllTables();

    const tablesForArea = response.filter((item) => {
      if (item.idArea === idArea) {
        return true;
      }
      return false;
    });
    return tablesForArea;
  }
}
