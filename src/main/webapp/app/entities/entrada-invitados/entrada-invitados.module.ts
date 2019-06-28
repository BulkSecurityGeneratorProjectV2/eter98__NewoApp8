import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NewoApp8SharedModule } from 'app/shared';
import {
  EntradaInvitadosComponent,
  EntradaInvitadosDetailComponent,
  EntradaInvitadosUpdateComponent,
  EntradaInvitadosDeletePopupComponent,
  EntradaInvitadosDeleteDialogComponent,
  entradaInvitadosRoute,
  entradaInvitadosPopupRoute
} from './';

const ENTITY_STATES = [...entradaInvitadosRoute, ...entradaInvitadosPopupRoute];

@NgModule({
  imports: [NewoApp8SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    EntradaInvitadosComponent,
    EntradaInvitadosDetailComponent,
    EntradaInvitadosUpdateComponent,
    EntradaInvitadosDeleteDialogComponent,
    EntradaInvitadosDeletePopupComponent
  ],
  entryComponents: [
    EntradaInvitadosComponent,
    EntradaInvitadosUpdateComponent,
    EntradaInvitadosDeleteDialogComponent,
    EntradaInvitadosDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp8EntradaInvitadosModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
