import * as React from "react";
import Footer from "../Footer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { slides } from '../../data'; 
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import { Button } from '../Button';
import '../Button.css';


export default function Gallery() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
    <h1 className="gallery">GALLERY</h1>
    
      <Button buttonStyle='btn--gallery' onClick={() => setOpen(true)}>
        Open the Gallery
      </Button>

      <Lightbox
        plugins={[Thumbnails]}
        open={open}
        close={() => setOpen(false)}
        slides={slides}
      />
      <Footer />
    </>
  );
}