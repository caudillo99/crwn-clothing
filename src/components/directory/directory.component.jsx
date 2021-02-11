import React ,{Component} from 'react'
import MenuItem from '../menu-item/menu-item.component';

class Directory extends Component {
   constructor(){
      super();
      this.state = {
         sections: [
            {
               title: 'hats',
               imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
               id: '1'
            },
            {
               title: 'jackets',
               imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
               id: '2'
            },
            {
               title: 'sneakers',
               imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
               id: '3'
            },
            {
               title: 'womens',
               imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
               size: 'large',
               id: '4'
            },
            {
               title: 'mens',
               imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
               size: 'large',
               id: '5'
            },
         ]
      }
   }

   render(){
      return(
         <div className="directory-menu">
            {this.state.sections.map(({title, imageUrl, size, id}) => (
                  <MenuItem key={id} size={size} title={title} imageUrl={imageUrl}/>
               )
            )}
         </div>
      )
   }
}

export default Directory;