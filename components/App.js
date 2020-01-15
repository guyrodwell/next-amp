import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const AppWrapper = styled.div`
  min-height: 100vh;
  padding: 2rem;

  img {
    border-radius: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    width: 100%;
    margin-bottom: 0.3rem;
  }
`;

const App = ({ isAmp }) => (
  <AppWrapper>
    <h1>Some news about small dogs</h1>
    <p>
      Pariatur nostrud irure officia ad aute. Duis pariatur incididunt
      incididunt veniam. Ea eiusmod labore sint et nisi aute sit Lorem sit ex
      velit consequat et cillum.
    </p>
    <figure>
      {isAmp ? (
        <amp-img
          src="/cav-pup-640.jpg"
          width="640"
          height="427"
          alt="Cavalier puppy. Photo by Hannah Oliver on Unsplash."
          layout="responsive"
        ></amp-img>
      ) : (
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="/cav-pup-640.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 640px)"
            srcSet="/cav-pup-640.jpg"
            type="image/jpeg"
          />

          <source
            media="(max-width: 768px)"
            srcSet="/cav-pup-768.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 768px)"
            srcSet="/cav-pup-768.jpg"
            type="image/jpeg"
          />

          <source
            media="(max-width: 1024px)"
            srcSet="/cav-pup-1024.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="/cav-pup-1024.jpg"
            type="image/jpeg"
          />

          <source
            media="(max-width: 1366px)"
            srcSet="/cav-pup-1366.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 1366px)"
            srcSet="/cav-pup-1366.jpg"
            type="image/jpeg"
          />

          <source
            media="(max-width: 1600px)"
            srcSet="/cav-pup-1600.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 1600px)"
            srcSet="/cav-pup-1600.jpg"
            type="image/jpeg"
          />

          <source
            media="(max-width: 1920px)"
            srcSet="/cav-pup-1920.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 1920px)"
            srcSet="/cav-pup-1920.jpg"
            type="image/jpeg"
          />

          <img
            src="/cav-pup-1920.jpg"
            alt="Cavalier puppy. Photo by Hannah Oliver on Unsplash."
          />
        </picture>
      )}
      <figcaption>This pupper did something cute.</figcaption>
    </figure>
    <p>
      Consectetur cupidatat ad elit veniam et et amet consequat aliqua deserunt.
      Irure ullamco voluptate nulla eiusmod labore nisi laboris minim id. Ex eu
      duis cupidatat sint amet elit eu fugiat esse ad fugiat velit culpa. Culpa
      consectetur Lorem fugiat labore. Ex in cupidatat excepteur eu nostrud
      aliqua. Ad ipsum ex cillum incididunt sit consequat mollit ut ipsum aute.
      Ex amet aute enim Lorem ipsum anim mollit ad. Elit labore tempor nostrud
      dolor irure incididunt irure velit. Non et deserunt ullamco in quis anim
      amet deserunt aliquip cupidatat elit ad.
    </p>
    <p>
      Sint non incididunt quis consequat esse officia magna ut deserunt deserunt
      eu. Eu quis fugiat excepteur dolore cillum labore aute aliquip ea. Et do
      occaecat in ea quis elit velit. Amet officia anim laboris eu exercitation
      et culpa commodo sint in consectetur sunt sit sint. Qui sit mollit labore
      aliquip. Qui esse veniam excepteur ullamco duis elit dolor velit excepteur
      aliquip laborum. Pariatur commodo voluptate ut labore aliqua. Cupidatat
      minim incididunt occaecat dolor deserunt qui aliqua anim nisi laborum.
      Veniam velit aliqua ullamco sunt incididunt laborum ullamco officia
      aliquip pariatur. Incididunt occaecat ea ex cillum do ex irure laborum
      adipisicing sunt qui non fugiat sit. Nostrud consequat quis sunt id do id
      ea sit pariatur fugiat consectetur fugiat occaecat commodo.
    </p>
  </AppWrapper>
);

export default App;
