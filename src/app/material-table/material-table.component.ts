import {Component, ViewChild,OnInit} from '@angular/core';
import { MatSort} from '@angular/material/sort';
import { Product, products} from './product';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

/**
 * @title Table with sorting
 */
@Component({
  selector: 'material-table',
  styleUrls: ['material-table.component.css'],
  templateUrl: 'material-table.component.html',
})
export class MaterialTableDemoComponent implements OnInit {
displayedColumns = ['productName', 'productCode', 'starRating', 'edit', 'delete'];
products:Product[]= products;
dataSource = new MatTableDataSource(products);
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort, {}) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

   ngOnInit() {
    //this.dataSource = this.products;
    this.dataSource.paginator = this.paginator;

  }

onNavigate(productCode){
console.log(`product code ${productCode}`)
}

}



/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */