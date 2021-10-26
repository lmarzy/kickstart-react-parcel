// ========================================================================
// GLOBAL/ELEMENTS/LINKS
// ========================================================================

// Set default colour
// Remove the gray background on active links in IE 10.
// Set text decoration

export const links = `
  a {
    color: red;
    background-color: transparent;
    text-decoration: none;
    transition: $transition;

    &:visited {
      color: orange;
      text-decoration: none;
    }

    &:hover,
    &:focus {
      color: purple;
    }

    &:active {
      color: blue;
    }
  }
`;
