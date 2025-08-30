import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';

import {
  ContainerComponent,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarNavHelper,
  SidebarToggleDirective,
  SidebarTogglerDirective,
} from '@coreui/angular';

import { IconDirective, IconSetService } from '@coreui/icons-angular';
import * as iconSet from '@coreui/icons';
import { logo } from '../icons/logo';
import { signet } from '../icons/signet';

import { navItems } from '../layout/_nav';
import { LayoutFooterComponent } from '../layout/layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from '../layout/layout-header/layout-header.component';

function isOverflown(element: HTMLElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  imports: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarToggleDirective,
    SidebarTogglerDirective,
    ContainerComponent,
    LayoutFooterComponent,
    LayoutHeaderComponent,
    // IconDirective,
    NgScrollbar,
    RouterOutlet,
    RouterLink,
    ShadowOnScrollDirective,
  ],
  providers: [SidebarNavHelper, IconSetService],
})
export class DefaultLayoutComponent {
  public navItems = [...navItems];

  constructor(private iconSetService: IconSetService) {
    this.iconSetService.icons = {
      ...iconSet.brandSet,
      ...iconSet.flagSet,
      ...iconSet.freeSet,
      logo,
      signet
    };
  }
}
