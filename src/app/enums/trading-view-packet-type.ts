export enum TradingViewPacketType {
  SetAuthToken = 'set_auth_token',
  ChartCreateSession = 'chart_create_session',
  ResolveSymbol = 'resolve_symbol',
  CreateSeries = 'create_series',
  CriticalError = 'critical_error',
  SymbolResolved = 'symbol_resolved',
  SeriesLoading = 'series_loading',
  TimescaleUpdate = 'timescale_update',
  SeriesCompleted = 'series_completed',
  Du = 'du',
}