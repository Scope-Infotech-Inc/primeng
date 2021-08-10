export class FilterMatchMode {
}
FilterMatchMode.STARTS_WITH = 'startsWith';
FilterMatchMode.CONTAINS = 'contains';
FilterMatchMode.NOT_CONTAINS = 'notContains';
FilterMatchMode.ENDS_WITH = 'endsWith';
FilterMatchMode.EQUALS = 'equals';
FilterMatchMode.NOT_EQUALS = 'notEquals';
FilterMatchMode.IN = 'in';
FilterMatchMode.LESS_THAN = 'lt';
FilterMatchMode.LESS_THAN_OR_EQUAL_TO = 'lte';
FilterMatchMode.GREATER_THAN = 'gt';
FilterMatchMode.GREATER_THAN_OR_EQUAL_TO = 'gte';
FilterMatchMode.BETWEEN = 'between';
FilterMatchMode.IS = 'is';
FilterMatchMode.IS_NOT = 'isNot';
FilterMatchMode.BEFORE = 'before';
FilterMatchMode.AFTER = 'after';
FilterMatchMode.DATE_IS = 'dateIs';
FilterMatchMode.DATE_IS_NOT = 'dateIsNot';
FilterMatchMode.DATE_BEFORE = 'dateBefore';
FilterMatchMode.DATE_AFTER = 'dateAfter';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVybWF0Y2htb2RlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9hcGkvIiwic291cmNlcyI6WyJmaWx0ZXJtYXRjaG1vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLGVBQWU7O0FBQ0QsMkJBQVcsR0FBRyxZQUFZLENBQUM7QUFDM0Isd0JBQVEsR0FBRyxVQUFVLENBQUM7QUFDdEIsNEJBQVksR0FBRyxhQUFhLENBQUM7QUFDN0IseUJBQVMsR0FBRyxVQUFVLENBQUM7QUFDdkIsc0JBQU0sR0FBRyxRQUFRLENBQUM7QUFDbEIsMEJBQVUsR0FBRyxXQUFXLENBQUM7QUFDekIsa0JBQUUsR0FBRyxJQUFJLENBQUM7QUFDVix5QkFBUyxHQUFHLElBQUksQ0FBQztBQUNqQixxQ0FBcUIsR0FBRyxLQUFLLENBQUM7QUFDOUIsNEJBQVksR0FBRyxJQUFJLENBQUM7QUFDcEIsd0NBQXdCLEdBQUcsS0FBSyxDQUFDO0FBQ2pDLHVCQUFPLEdBQUcsU0FBUyxDQUFDO0FBQ3BCLGtCQUFFLEdBQUcsSUFBSSxDQUFDO0FBQ1Ysc0JBQU0sR0FBRyxPQUFPLENBQUM7QUFDakIsc0JBQU0sR0FBRyxRQUFRLENBQUM7QUFDbEIscUJBQUssR0FBRyxPQUFPLENBQUM7QUFDaEIsdUJBQU8sR0FBRyxRQUFRLENBQUM7QUFDbkIsMkJBQVcsR0FBRyxXQUFXLENBQUM7QUFDMUIsMkJBQVcsR0FBRyxZQUFZLENBQUM7QUFDM0IsMEJBQVUsR0FBRyxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRmlsdGVyTWF0Y2hNb2RlIHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNUQVJUU19XSVRIID0gJ3N0YXJ0c1dpdGgnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ09OVEFJTlMgPSAnY29udGFpbnMnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTk9UX0NPTlRBSU5TID0gJ25vdENvbnRhaW5zJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVORFNfV0lUSCA9ICdlbmRzV2l0aCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFUVVBTFMgPSAnZXF1YWxzJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5PVF9FUVVBTFMgPSAnbm90RXF1YWxzJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElOID0gJ2luJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExFU1NfVEhBTiA9ICdsdCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMRVNTX1RIQU5fT1JfRVFVQUxfVE8gPSAnbHRlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdSRUFURVJfVEhBTiA9ICdndCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHUkVBVEVSX1RIQU5fT1JfRVFVQUxfVE8gPSAnZ3RlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJFVFdFRU4gPSAnYmV0d2Vlbic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJUyA9ICdpcyc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJU19OT1QgPSAnaXNOb3QnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQkVGT1JFID0gJ2JlZm9yZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBRlRFUiA9ICdhZnRlcic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEQVRFX0lTID0gJ2RhdGVJcyc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEQVRFX0lTX05PVCA9ICdkYXRlSXNOb3QnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREFURV9CRUZPUkUgPSAnZGF0ZUJlZm9yZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEQVRFX0FGVEVSID0gJ2RhdGVBZnRlcic7XG59Il19