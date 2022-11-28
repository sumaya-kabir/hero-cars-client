import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='w-50 mx-auto my-5'>
            <h2 className='text-center pb-5'>Questions And Answers</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What are the different ways to manage a state in a React application?</Accordion.Header>
                    <Accordion.Body>
                        Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.
                        <br />
                        The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:
                        <br />
                        <li>Hooks</li>
                        <li>React Context API</li>
                        <li>Apollo Link State</li>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How does prototypical inheritance work?</Accordion.Header>
                    <Accordion.Body>
                        Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is a unit test? Why should we write unit tests?</Accordion.Header>
                    <Accordion.Body>
                        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                        <br />
                        Generally, smaller tests are better as they give a more granular view of your code’s performance. Also, when you test very small units, your tests can run fast, like a thousand tests in a second fast.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>React vs. Angular vs. Vue?</Accordion.Header>
                    <Accordion.Body>
                        There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.
                        <br />
                        React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.
                        <br />
                        They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.
                        <br />
                        Each framework is component-based and allows the rapid creation of UI features.
                        <br />
                        <br />
                        <strong>REACT</strong>
                        <br />
                        React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.

                        React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.

                        Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user.
                        <br />
                        <br />
                        <strong>Vue</strong>
                        <br />
                        The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.
                        <br />
                        <br />
                        <strong>Angular</strong>
                        <br />
                        AngularJS, the original framework, is an MVC (Model-View-Controller) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.

                        Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;