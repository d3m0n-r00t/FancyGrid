import {Column} from "./Column";

export default interface GridApi {
  add(rowData: object): void;
  add(data: object[]): void;
  addChild(rowData: object): void;
  addChild(item: any, rowData: any): void;
  addColumn(column: Column): void;
  addColumn(column: Column, side: 'left'|'center'|'right'): void;
  addColumn(column: Column, side: 'left'|'center'|'right', orderIndex: number): void;
  addEvent(eventName: string): void;
  addFilter(dataIndex: string, value: any, sign?: string): void;
  addGroup(dataIndex: string, expanded?: boolean): void;
  autoSizeColumns(): void;
  clearData(): void;
  clearDirty(): void;
  clearFilter(): void;
  clearFilter(dataIndex: string, sing?: string): void;
  clearGroup(): void;
  clearSelection(): void;
  collapse(id: number|string|object): void;
  collapseAll(): void;
  collapseGroup(groupName?: string): void;
  copy(copyWithHeader?: boolean): void;
  deSelectRow(rowIndex: number): void;
  destroy(): void;
  disableSelection(): void;
  each(fn: Function, scope?: object): void;
  editCell(cell: object): void;
  enableSelection(): void;
  expand(id: number|string|object): void;
  expandAll(): void;
  expandGroup(groupName?: string): void;
  exportToCSV(params?: {
    all?: boolean;
    fileName?: string;
    csvFileName?: string;
    header?: boolean;
    csvHeader?: boolean;
    separator?: string;
    csvSeparator?: string;
    ignoreRender?: boolean;
    rowIds?: number[]
  }): void;
  exportToExcel(params?: {
    all?: true;
    fileName?: string;
    indexes?: (string|number)[];
    ignoreRender?: boolean;
    rowIds?: number[];
  }): void;
  find(dataIndex: string, value: any): number[];
  findItem(dataIndex: string, value: any): object[];
  fire(eventName: string, params?: any): void;
  firstPage(): void;
  flashCell(rowIndex: number, orderIndex: number, side?: 'left'|'center'|'right'): void;
  flashRow(rowIndex: number): void;
  get(): object[];
  get(rowIndex: number): object;
  get(rowIndex: number, dataIndex: string): any;
  getById(id: number|number): object;
  getCell(params: {
    rowIndex?: number;
    columnIndex?: number;
    side?: 'left'|'center'|'right';
    id?: number;
    index?: string;
  }): object;
  getChanges(): {
    changed: object;
    removed: object;
    inserted: object;
  };
  getColumn(dataIndex: string): object;
  getColumnById(id: string): object;
  getColumns(side?: string): object[];
  getData(): object[];
  getDataAsCSV(params: {
    header?: boolean;
    csvHeader?: boolean;
    separator?: string;
    csvSeparator?: string;
    indexes?: string[];
  }): string;
  getDataFiltered(): object[];
  getDataView(): object[];
  getFilter(): any;
  getFilter(dataIndex: string|number): any;
  getFilter(dataIndex: string|number, sign: string): any;
  getHeaderCell(dataIndex: string|number, side?: string): object;
  getHeight(): number;
  getPage(): number;
  getPages(): number;
  getPageSize(): number;
  getRowById(id: number|string): number;
  getSelection(info: boolean): any[];
  getSorter(dataIndex?: string|number): any;
  getSubTitle(): string;
  getTitle(): string;
  getTotal(): number;
  getViewTotal(): number;
  getWidth(): number;
  hide(): void;
  hideBar(bar: 'tbar'|'subtbar'|'bbar'|'buttons'): void;
  hideColumn(dataIndex: string): void;
  hideColumn(dataIndexes: string[]): void;
  hideColumn(id: string): void;
  hideColumn(orderIndex: number): void;
  hideColumn(side: string, dataIndex: string): void;
  hideLoadMask(): void;
  isDirty(): boolean;
  isLoading(): boolean;
  insert(rowIndex: number, rowData: object): void;
  insert(rowData: object): void;
  insert(data: object[]): void;
  insert(rowIndex: number, data: object[]): void;
  lastPage(): void;
  load(fn?: Function): void;
  lockColumn(dataIndex: string): void;
  nextPage(): void;
  on(eventName: string, handler: Function, scope?: object): void;
  once(eventName: string, handler: Function, scope?: object): void;
  prevPage(): void;
  redo(): void;
  remove(id: string): void;
  remove(item: object): void;
  remove(items: number[]): void;
  remove(items: object[]): void;
  remove(items: object[]): void;
  removeAll(): void;
  removeAt(rowIndex: number): void;
  removeColumn(id: string): void;
  removeColumn(dataIndex: string): void;
  removeColumn(dataIndex: string, side: 'left'|'center'|'right'): void;
  removeColumn(orderIndex: number): number;
  removeColumn(orderIndex: number, side: 'left'|'center'|'right'): void;
  removeColumn(column: object): void;
  removeRow(rowIndex: number): void;
  removeRowById(id: string): void;
  removeRowById(config: object): void;
  removeRowById(items: number[]): void;
  removeRowById(items: object[]): void;
  rightLockColumn(dataIndex: string): void;
  save(): void;
  scroll(top: number, left?: number): void;
  scrollToRow(rowIndex: number): void;
  search(value: string|number): void;
  selectCell(params: {
    id?: number|string;
    index?: string;
    cell?: object;
    firstRow?: boolean;
  }): void;
  selectCellDown(): void;
  selectCellLeft(): void;
  selectCellRight(): void;
  selectCellUp(): void;
  selectColumn(dataIndex: string): void;
  selectRow(rowIndex: number): void;
  selectRow(rowIndex: number, value: boolean): void;
  selectRow(rowIndex: Number, value: Boolean, multi: Boolean): void;
  set(rowIndex: number, dataIndex: string, value: any): void;
  setById(id: number|string, dataIndex: string, value: any): void;
  setColumnComboData(dataIndex: string, data: ([]|object)[]): void;
  setColumnComboData(orderIndex: string, data: ([]|object)[]): void;
  setColumnTitle(dataIndex: string, value: string, side?: 'left'|'center'|'right'): void;
  setColumnTitle(orderIndex: number, value: string, side?: 'left'|'center'|'right'): void;
  setColumnWidth(orderIndex: number, width: number): void;
  setColumnWidth(dataIndex: string, width: number): void;
  setColumnWidth(dataIndexes: object[]): void;
  setData(data: (object|[])[]): void;
  setHeight(value: number): void;
  setPage(page: number): void;
  setPageSize(value: number): void;
  setParams(params: object): void;
  setSelModel(selModel: 'cells'|'row'|'rows'|'column'|'columns'): void;
  setSubTitle(value: string): void;
  setTitle(value: string): void;
  setTrackOver(trackType: 'cell'|'row'|'column', enabled: boolean): void;
  setUrl(url: string|{
    create?: string;
    read?: string;
    update?: string;
    destroy?: string;
  }): void;
  setWidth(value: number): void;
  show(): void;
  showAt(x: number, y: number): void;
  showBar(bar: 'tbar'|'subtbar'|'bbar'|'buttons'): void;
  showColumn(dataIndex: string): void;
  showColumn(dataIndexes: string[]): void;
  showColumn(id: string): void;
  showColumn(orderIndex: number): void;
  showColumn(side: 'left'|'center'|'right', dataIndex: string): void;
  showLoadMask(text: string): void;
  sort(dataIndex: string, direction: 'ASC'|'DESC'|'DROP'): void;
  stopEditor(): void;
  stopSelection(): void;
  toggleCollapse(id: number|string|object): void;
  toggleExpand(id: number|string|object): void;
  un(eventName: string, handler: Function): void;
  undo(): void;
  undoAll(): void;
  unLockColumn(index: string): void;
  update(optins?: {
    type?: 'cell'|'row';
    flash?: boolean;
    duration?: number;
  }): void;
  updateFilters(): void;
}