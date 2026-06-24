
interface FolderItem {
  id: number
  name: string
  children?: FolderItem[]
}

const data: FolderItem[] = [
  {
    id: 1,
    name: 'README.md',
  },

  {
    id: 2,
    name: 'Documents',
    children: [
      {
        id: 3,
        name: 'Word.doc',
      },
      {
        id: 4,
        name: 'Powerpoint.ppt',
      },
    ],
  },

    {
      id: 5,

      name: 'Downloads',

      children: [
        {
          id: 6,

          name: 'unnamed.txt',
        },

        {
          id: 7,

          name: 'Misc',

          children: [
            {
              id: 8,

              name: 'foo.txt',
            },

            {
              id: 9,

              name: 'bar.txt',
            },
          ],
        },
      ],
    },
     {
      id: 10,

      name: 'Mylo',
    },
];

//Functional Component --Start
const FolderStructure = () => {

    // Recursive Function
    const recursiveFunc = (d: FolderItem[]) => {

        const listItems = d.map((list) => (
            <li key={list.id}>
                {list.name}

                { list.children &&
                    <ul>
                        {
                            recursiveFunc(list.children) 
                        }
                    </ul>
                }
            </li>
        ) )

        return listItems;
        
    }

    const result = recursiveFunc(data);
 
    return (
        <>
            {/* <h1>Folder Structure</h1>

            <div>
                <h2>HTML Nested List Example:</h2>
                <ul>  
                    <li>List 1</li>
                    <li>
                        List 2
                        <ul>
                            <li>Sub List 1
                                <ul>
                                    <li>Sub Sub List 1</li>
                                    <li>Sub Sub List 2</li>
                                </ul>
                            </li>
                            <li>Sub List 2</li>
                        </ul>
                    </li>
                    <li>List 3</li>
                    <li>List 4
                        <ul>
                            <li>Sub List 1</li>
                        </ul>
                    </li>
                </ul>
            </div> */}
            --------------------------------------------------

            <ul>
               {result}
            </ul>
        </>
    )
}

export default FolderStructure
