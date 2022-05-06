# responsive-modal-react-portal
## Created with CodeSandbox

Created a Responsive Login Form Modal using React and React Portals. Used React-Bootstrap to design and style Forms. 
You can definitely use React-Bootstrap Modal, but I wanted show you that how you can create your own modal. 

## Why using Portal?
=> Portal is another one of the React Hooks, and this hook can create a Portal on to the DOM, so that you can target an element outside the root element, and pass the component that you want into that element.
So, if we want to create some kind of overlay on the website, we can do that using just CSS and JS, but, semantically and from the “Clean HTML Structure” point of view, having a nested modal isn’t ideal. It is an Overlay to the entire page after all.

So React Portal can help us to already create an element, where we can pass whatever components we want, let it be a Modal, or Popup. This will help us follow the Clean HTML Structure.

### Here is the codesandbox link https://codesandbox.io/s/elastic-ride-3yg62l.
