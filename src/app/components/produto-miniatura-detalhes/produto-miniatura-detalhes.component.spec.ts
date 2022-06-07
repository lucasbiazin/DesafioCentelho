import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoMiniaturaDetalhesComponent } from './produto-miniatura-detalhes.component';

describe('ProdutoMiniaturaDetalhesComponent', () => {
  let component: ProdutoMiniaturaDetalhesComponent;
  let fixture: ComponentFixture<ProdutoMiniaturaDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoMiniaturaDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoMiniaturaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
