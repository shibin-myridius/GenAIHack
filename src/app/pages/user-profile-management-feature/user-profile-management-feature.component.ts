
import { Component, OnInit } from '@angular/core';
import { UserProfileManagementFeatureService } from './user-profile-management-feature.service';

@Component({
  selector: 'app-user-profile-management-feature',
  templateUrl: './user-profile-management-feature.component.html',
  styleUrls: ['./user-profile-management-feature.component.scss']
})
export class UserProfileManagementFeatureComponent implements OnInit {
  
  constructor(private user-profile-management-featureService: UserProfileManagementFeatureService) { }
  
  ngOnInit(): void {
    this.loadData();
  }
  
  private loadData(): void {
    // Load component data
  }
}
