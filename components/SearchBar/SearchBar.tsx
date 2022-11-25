import React from 'react';
import {
	FormControl,
	IconButton,
	InputAdornment,
	OutlinedInput,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { useRouter } from 'next/router';

const SearchBar = () => {
    const router = useRouter();
    const [input , setInput] = React.useState<string>("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setInput(event.target.value);
    }
    function handleClick() {
        input && router.push(`/search/${input}`);

    }

	return (
		<FormControl>
			<OutlinedInput
                onChange={(event) => handleChange(event)}
				size='small'
				endAdornment={
					<InputAdornment position='end'>
						<IconButton
                        onClick={handleClick}
                        edge='end'>
                            <Search  />
						</IconButton>
					</InputAdornment>
				}
			/>
		</FormControl>

	);
    
};

export default SearchBar;
