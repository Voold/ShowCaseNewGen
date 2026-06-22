import type { TagDto } from "../model/types"

export type GetTagsResponse = {
  groupId: string
  groupName: string
  tags: TagDto[]
}[]