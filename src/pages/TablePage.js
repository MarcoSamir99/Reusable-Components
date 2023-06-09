// import Table from "../components/Table"; we use this if we need unsorted data table
import SortableTable from "../components/SortableTable";

function TablePage() {

    const data = [
        {name: 'Orange' ,color: 'bg-orange-500', score: 5},
        {name: 'Apple' ,color: 'bg-red-500', score: 7},
        {name: 'Banana' ,color: 'bg-yellow-500', score: 3 },
        {name: 'Lime' ,color: 'bg-green-500', score: 1 },
        {name: 'Blue Berry' ,color: 'bg-blue-500', score: 10 },
    ];

    const config = [
        { 
            label: 'Name',
            render: (fruit) => fruit.name, 
            sortValue: (fruit) => fruit.name,
        },
        { 
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}/>,
        },
        { 
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score,
        },
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    }

    return (<div>
        <SortableTable data={data} config={config} keyFn={keyFn} />
        {/* <Table data={data} config={config} keyFn={keyFn} /> */}
    </div>
    );

}

export default TablePage;