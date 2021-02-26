import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts! : Post[]
  page =1;
  count =0;
  tableSize =10;
  tableSizes =[10,15,20,25]

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(){
    this.postService.getPosts().subscribe(response =>{
      this.posts = response as any
    }, error => {
      console.log(error)
    })
  }

  onTableDataChange(event:any){
    this.page=event;
    this.getPosts();
  }

  onTableSizeChange(event:any){
    this.tableSize = event.target.value;
    this.page =1;
    this.getPosts();
  }
}
