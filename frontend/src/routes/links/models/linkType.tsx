import { v4 as uuidv4 } from "uuid";

export class ToolsLink {
  id: string
  url: string
  name: string
  description: string;

  constructor(params: {name: string, url: string, id?: string, description?: string}) {
    this.id = params.id ?? uuidv4();
    this.name = params.name;
    this.url = params.url;
    this.description = params.description ?? "";
  }

  toJson() {
    return JSON.stringify({
      id: this.id,
      url: this.url,
      name: this.name,
      description: this.description
    });
  }

  static fromJson(str : string) {
    return new ToolsLink(JSON.parse(str));
  }
}

export type linkProps = {
  link: ToolsLink
}

export type linksProps = {
  links: Array<ToolsLink>
}

export type addLinkFormProps = {
  addLink: (link: ToolsLink) => void
}