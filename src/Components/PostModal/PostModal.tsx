import React from 'react';
import './styles/PostModal.scss';
import { PostProps } from '../../interfaces';
import { PostHeader } from '../PostHeader';
import { Carousel } from '../Carousel';
import { PostInteractive } from '../PostInteractive';
import { LikeButtonProps } from '../LikeButton/LikeButton';
import { InputComment } from '../InputComment';
export interface PostModalProps {
	postData: PostProps;
	likeButton: LikeButtonProps;
}

const PostModal: React.FC<PostModalProps> = ({ postData, likeButton }) => {
	const { contents, likeCount, owner, comments, description } = postData;

	return (
		<>
			<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${owner.name}modal`}>
				Launch demo modal
			</button>

			<div className="modal modal-xl fade" id={`${owner.name}modal`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content dark">
						<div className="modal-content-section">
							<Carousel contents={contents} id={owner.name} />
						</div>
						<div className="modal-content-section">
							<div className="modal-header">
								<PostHeader owner={owner} />
							</div>
							<div className="modal-comments">
								{description}
							</div>
							<div className="modal-interactive">
								<PostInteractive likeButton={likeButton} />
							</div>
							<div className="modal-input">
								<InputComment />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PostModal;
