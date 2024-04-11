import { Body, Controller, Delete, Get, Post, Route, SuccessResponse } from "tsoa";
import { GetBookOutputDto, GetBooksOutputDto } from "./dto/get-book.dto";
import { PostBookInputDto, PostBookOutputDto } from "./dto/post-book.dto";

@Route("books")
export class BookController extends Controller {
    constuctor(){
        super();
    }

    @Get()
    @SuccessResponse(200)
    async list(): Promise<GetBooksOutputDto> {
        return [];
    }

    @Get("{id}")
    @SuccessResponse(200)
    async getById(): Promise<GetBookOutputDto> {
        return {
            id: "mock id",
            author: "mock author",
            summary: "mock summary",
            title: "mock title",
            totalPages: 100,
        };
    }

    @Post()
    @SuccessResponse(201)
    async create(
        @Body() requestBody: PostBookInputDto
    ): Promise<PostBookOutputDto> {
        return {
            id: "mock id",
            author: "mock author",
            summary: "mock summary",
            title: "mock title",
            totalPages: 100,
        };
    }

    @Delete()
    @SuccessResponse(204)
    async delete(): Promise<void> {
        return;
    }


}