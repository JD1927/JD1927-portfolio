export interface GithubOwner {
  avatar_url: string;
  login: string;
}

export interface GithubRepo {
  name: string;
  clone_url: string;
  default_branch: string;
  created_at: string;
  full_name: string;
  html_url: string;
  languages_url: string;
  owner: GithubOwner;
}
