import  { ComponentType } from 'react';

export const logRender = <P extends object>(WrapperComponent: ComponentType<P>) => {
  return (props: P) => {
    const name: string =WrapperComponent.name ?? WrapperComponent.render?.name
    console.log('Render component:', name);
    return <WrapperComponent {...props} />;
  };
};