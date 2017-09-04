/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { TwpointsTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { SettingDetailComponent } from '../../../../../../main/webapp/app/entities/setting/setting-detail.component';
import { SettingService } from '../../../../../../main/webapp/app/entities/setting/setting.service';
import { Setting } from '../../../../../../main/webapp/app/entities/setting/setting.model';

describe('Component Tests', () => {

    describe('Setting Management Detail Component', () => {
        let comp: SettingDetailComponent;
        let fixture: ComponentFixture<SettingDetailComponent>;
        let service: SettingService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TwpointsTestModule],
                declarations: [SettingDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    SettingService,
                    JhiEventManager
                ]
            }).overrideTemplate(SettingDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SettingDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SettingService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Setting(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.setting).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
