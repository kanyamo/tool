import React, { useRef, useState } from 'react';
import { Snackbar, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

type PasswordProps = {
  password: string,
};

const Password: React.FC<PasswordProps> = ({password}) => {
  const passwordRef = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);

  const handleCopyPassword = () => {
    if (passwordRef.current !== null) {
      setOpen(true)
      navigator.clipboard.writeText(passwordRef.current.innerText);
    }
  }

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={() => setOpen(false)}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <div className="password-list-item-container">
      <span ref={passwordRef}>
        { password }
      </span>
      <Button 
        onClick={handleCopyPassword}
        startIcon={<ContentCopyIcon></ContentCopyIcon>}
      >
        コピー
      </Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Copied!"
        action={action}
        anchorOrigin={
          {
            vertical: 'bottom',
            horizontal: 'center',
          }
        }
      />
    </div>
  )
}

export default Password;
