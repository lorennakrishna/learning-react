import Item from './Item'

function List() {
    return(
          //<div>
        <>
            <h1>Minha Lista</h1>
              <ul>
                
                <li>Item 1</li>
                <li>Item 2</li>
                <Item marca="Ferrari" />
                <Item marca="Fiat" />
                <Item marca="Renault" />
                
              </ul>

        </>

          //</div>
    )
}

export default List


//<li>Item 1</li>
//<li>Item 2</li>