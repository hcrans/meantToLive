import { ParentProps, useContext } from "solid-js";
import { AppServiceContext, AppServices } from './application-service.context';

export function AppServiceProvider(props: ParentProps<{ appServiceContext: AppServices }>) {
  return (
    <AppServiceContext.Provider value={props.appServiceContext} >
      {props.children}
    </AppServiceContext.Provider>
  );
}

export function useAppServices<T>(serviceDelegate: (appService: AppServices) => T) {
  const context = useContext(AppServiceContext);
  if (context === undefined) throw new Error('Application service context not found');
  return serviceDelegate(context);
}
