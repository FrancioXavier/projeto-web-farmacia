import styled from 'styled-components';

export const CarouselContainer = styled.section`
  --slide-height: 19rem;
  --slide-spacing: 1rem;
  --slide-size: 25%;
.embla__viewport {
  overflow: hidden;
}
.embla__container {
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
  margin-left: calc(var(--slide-spacing) * -1);
}
.embla__slide {
  flex: 0 0 25%;
  min-width: 0;
  padding-left: var(--slide-spacing);

  @media only screen and (max-width: 1200px) {
    flex: 0 0 33%;
  }

  @media only screen and (max-width: 530px) {
    flex: 0 0 50%;
  }

  @media only screen and (max-width: 350px) {
    flex: 0 0 100%;
  }
}
.embla__slide__number {
  box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
  border-radius: 1.8rem;
  font-size: 4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--slide-height);
}
.embla__controls {
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  gap: 1.2rem;
  margin-top: 1.8rem;

  @media only screen and (max-width: 530px) {
    display: none;
  }
}
.embla__buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
  align-items: center;
}
.embla__button {
  -webkit-tap-highlight-color: rgba(var(--text-high-contrast-rgb-value), 0.5);
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
  width: 3.6rem;
  height: 3.6rem;
  z-index: 1;
  border-radius: 50%;
  color: var(--text-body);
  display: flex;
  align-items: center;
  justify-content: center;
}
.embla__button:disabled {
  color: var(--detail-high-contrast);
}
.embla__button__svg {
  width: 35%;
  height: 35%;
}
.embla__selected-snap-display {
  justify-self: flex-end;
  align-self: center;
  color: var(--text-low-contrast);
  font-weight: 600;
}
`;
