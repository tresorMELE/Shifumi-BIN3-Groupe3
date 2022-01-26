// function Button({ variant = "squared", style = {}, title, onClick, img }) {
  //if (!props.style) props.style = {};
  // <=> props.style = props.style ? props.style : {}
  // <=> props.style = props.style ?? {}
  // <=> props.style ??= {};
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({variant, style = {}, title, onClick}) {
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={onClick} variant="contained">Commencer</Button>
    </Stack>
  );
}

//   switch (variant) {
//     case "rounded":
//       style.borderRadius = 5;
//       break;
//     case "round":
//       style.borderRadius = "50%";
//       style.height = 30;
//       style.width = 30;
//       style.overflow = "hidden";
//       break;
//     case "squared":
//       style.borderRadius = 0;
//       break;
//   }
//   return (
//     <button onClick={onClick} style={style}>
//       {title}
//       {variant === "round" && img && <img src={img} />}
//     </button>
//   );
// }

// export default Button;