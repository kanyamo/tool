import React from 'react';
import { useState, useRef } from 'react';
import { Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ToolsLink, addLinkFormProps } from '../models/linkType';

const AddLinkForm : React.FC<addLinkFormProps> = ({ addLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  const linkNameRef = useRef<HTMLInputElement>(null);
  const linkURLRef = useRef<HTMLInputElement>(null);
  const linkDescriptionRef = useRef<HTMLInputElement>(null);

  const handleAddLink = () => {
    const name = linkNameRef.current!.value
    const url = linkURLRef.current!.value
    if (name === "" || url === "") return;
    const link = new ToolsLink({
      name,
      url,
      description: linkDescriptionRef.current!.value,
    });
    addLink(link);
    linkNameRef.current!.value = "";
    linkURLRef.current!.value = "";
    linkDescriptionRef.current!.value = "";
  }

  if (isOpen) {
    return (
      <div>
        <div>
          <Button variant="outlined" startIcon={<RemoveIcon></RemoveIcon>} onClick={() => {
            setIsOpen(false);
          }}>
            閉じる
          </Button>
        </div>
        <form className="add-link-form">
          <div className="field-container link-name-container">
            <TextField
              label="リンクの名前"
              inputRef={linkNameRef}
              fullWidth
              placeholder='私のページ'
              variant='filled'
            ></TextField>
          </div>
          <div className="field-container link-name-container">
            <TextField
              label="URL"
              inputRef={linkURLRef}
              fullWidth
              placeholder="https://example.com"
              variant="filled"
            ></TextField>
          </div>
          <div className="field-container link-description-container">
            <TextField
              label="リンクの説明（任意）"
              inputRef={linkDescriptionRef}
              fullWidth
              variant='filled'
              multiline
              rows={4}
            ></TextField>
          </div>
          <div className="add-button-container">
            <Button
              variant='contained'
              onClick={handleAddLink}
            >
              追加する
            </Button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <Button variant="outlined" startIcon={<AddIcon></AddIcon>} onClick={() => {
          setIsOpen(true);
        }}>リンクを作成する</Button>
      </div>
    );
  }
}

export default AddLinkForm
