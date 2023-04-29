import React from 'react';
import './Suggestions.scss';
import { User } from '../../interfaces';
import { UserPicture } from '../UserPicture';
import ButtonFollowContainer from '../Buttons/ButtonFollow/ButtonFollowContainer';

export type SuggestionsProps = {
	users: User[];
}

const Suggestions: React.FC<SuggestionsProps> = ({ users }) => (
	<div className="suggestions-container">
		<p className='title'>Suggestions for you</p>
		<div className="suggestionsitems-container">
			{users.map(user => <SuggestionItem user={user} key={user._id} />)}
		</div>
	</div>
);

export interface SuggestionItemProps {
	user: User;
}

const SuggestionItem: React.FC<SuggestionItemProps> = ({ user }) => (
	<div className="suggestionitem">
		<div>
			<UserPicture picture={user.picture} />
			<div>
				<p className='suggestionitem-username'>{user.username}</p>
				<p className='suggestionitem-fullname'>{user.fullname}</p>
			</div>
		</div>
		<ButtonFollowContainer idUser={user?._id!} username={user.username} />
	</div>
)

export default Suggestions;
