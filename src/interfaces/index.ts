export interface UserLogged {
  _id: string;
  email: string;
  username: string;
  fullname: string;
  password: string;
  picture: string;
  follows: User[];
  followers: User[];
  __v: number;
}

export interface User {
  _id?: string;
  fullname: string;
  username: string;
  picture: string;
}

export interface Comment {
  owner: User;
}

export interface PostProps {
  owner: User;
  contents: ContentPost[];
  likeCount: number;
  description?: string;
  comments?: Comment[];
}

export interface ContentPost {
  url: string;
  type: "img" | "video";
}
