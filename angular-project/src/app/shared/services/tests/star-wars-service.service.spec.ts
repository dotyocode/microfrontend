import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StarWarsServiceService } from '../star-wars-service.service';

describe('StarWarsServiceService', () => {
  let service: StarWarsServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(StarWarsServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Listar o planeta e deve coonter o ID 1', () => {
    const mockResponse = { name: 'Tatooine' };
    const id = 1;

    service.getListaPlanetasComId(id).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${service['pathListarPlanetasId']}/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
