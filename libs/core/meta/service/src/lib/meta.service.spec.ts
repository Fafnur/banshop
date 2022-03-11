import { DOCUMENT } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { mock, when } from 'ts-mockito';

import { ENVIRONMENTS_DEFAULT, EnvironmentService } from '@banshop/core/environments/service';
import { META_CONFIG, META_CONFIG_DEFAULT, META_CONFIG_OG, META_CONFIG_OG_DEFAULT } from '@banshop/core/meta/common';
import { providerOf } from '@banshop/core/testing';

import { MetaService } from './meta.service';

describe('MetaService', () => {
  let service: MetaService;
  let routerMock: Router;
  let environmentServiceMock: EnvironmentService;
  let document: Document;

  beforeEach(() => {
    routerMock = mock(Router);
    environmentServiceMock = mock(EnvironmentService);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [
        providerOf(Router, routerMock),
        providerOf(EnvironmentService, environmentServiceMock),
        {
          provide: LOCALE_ID,
          useValue: 'ru-RU',
        },
        {
          provide: META_CONFIG,
          useValue: META_CONFIG_DEFAULT,
        },
        {
          provide: META_CONFIG_OG,
          useValue: META_CONFIG_OG_DEFAULT,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    when(environmentServiceMock.environments).thenReturn(ENVIRONMENTS_DEFAULT);
    when(routerMock.url).thenReturn('/');

    service = TestBed.inject(MetaService);
    document = TestBed.inject(DOCUMENT);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should set meta', () => {
    service.update();

    expect(document.title).toBe(META_CONFIG_DEFAULT.title);
    expect((document.getElementById('canonical') as HTMLLinkElement)?.href).toBe('http://localhost/');
    expect((document.getElementById('meta-description') as HTMLMetaElement)?.content).toBe(META_CONFIG_DEFAULT.description);
    expect((document.getElementById('meta-keywords') as HTMLMetaElement)?.content).toBe(META_CONFIG_DEFAULT.keywords);
    expect((document.getElementById('meta-og:title') as HTMLMetaElement)?.content).toBe(
      `${META_CONFIG_OG_DEFAULT.title} | ${ENVIRONMENTS_DEFAULT.brand}`
    );
    expect((document.getElementById('meta-og:description') as HTMLMetaElement)?.content).toBe(META_CONFIG_OG_DEFAULT.description);
    expect((document.getElementById('meta-og:type') as HTMLMetaElement)?.content).toBe(META_CONFIG_OG_DEFAULT.type);
    expect((document.getElementById('meta-og:locale') as HTMLMetaElement)?.content).toBe('ru-RU');
    expect((document.getElementById('meta-og:site_name') as HTMLMetaElement)?.content).toBe(ENVIRONMENTS_DEFAULT.brand);
    expect((document.getElementById('meta-og:image') as HTMLMetaElement)?.content).toBe(
      `${ENVIRONMENTS_DEFAULT.appHost}${META_CONFIG_OG_DEFAULT.image}`
    );
    expect((document.getElementById('meta-og:image:type') as HTMLMetaElement)?.content).toBe(META_CONFIG_OG_DEFAULT.imageType);
    expect((document.getElementById('meta-og:image:width') as HTMLMetaElement)?.content).toBe(META_CONFIG_OG_DEFAULT.imageWidth);
    expect((document.getElementById('meta-og:image:height') as HTMLMetaElement)?.content).toBe(META_CONFIG_OG_DEFAULT.imageHeight);
  });
});
