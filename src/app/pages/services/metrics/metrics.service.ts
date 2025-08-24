import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MetricsService {
  constructor() {}

  // for demo, returns a Promise; replace with HttpClient calls
  getSummary() {
    return Promise.resolve({
      totalResidents: 1240,
      documentsIssued: 86,
      openIncidents: 12,
      months: ['Apr','May','Jun','Jul','Aug'],
      newResidents: [12, 9, 14, 16, 10],
      incidents: [4, 3, 6, 7, 2]
    });
  }
}
