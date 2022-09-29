import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

const SortBy = ({setSortedBy, setOrderedBy, sortedBy, orderedBy}) => {

    return (
        <nav className="sortBar">
            <div className="logo"><p>Sort By</p></div>

                    <FormControl>
                    <InputLabel id="sortBy">Sort By</InputLabel>
                    <Select
                        id="sortBy"
                        value={sortedBy}
                        label="sortBy"
                        onChange={(e) => setSortedBy(e.target.value)}
                    >
                        <MenuItem value={"created_at"}>Date</MenuItem>
                        <MenuItem value={"comment_count"}>Comments</MenuItem>
                        <MenuItem value={"votes"}>Votes</MenuItem>
                    </Select>
                    </FormControl>
                    <FormControl>
                    <InputLabel id="order">Order By</InputLabel>
                    <Select
                        id="order"
                        value={orderedBy}
                        label="order"
                        onChange={(e) => setOrderedBy(e.target.value)}
                    >
                        <MenuItem value={"desc"}>Highest</MenuItem>
                        <MenuItem value={"asc"}>Lowest</MenuItem>
                    </Select>
                    </FormControl>
        </nav>
    )
}

export default SortBy