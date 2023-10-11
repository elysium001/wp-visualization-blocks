
export function OmarsDemoReactComponent(props) {
  console.log('OmarsDemoReactComponent', props); // eslint-disable-line no-console
  return <>
    <p>{props?.title}</p>
  </>;
}
