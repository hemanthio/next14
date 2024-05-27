'use client'

import { Button } from "@/components/ui/button"
import { Card, CardHeader } from "@/components/ui/card"
import { Label } from "@radix-ui/react-label"


function Guestbook() {
  return (
   <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
<h1 className="text-xl font-semibold lg:text-5xl pt-5">Guestbook</h1>
<p className="leading-7 text-muted-foreground mt-2">Sign my guestbook</p>

<Card className="mt-10">
<CardHeader className="flex flex-col w-full" >
<Label>
message
</Label>
<GuestBookForm />
</CardHeader>
</Card>
   </section>
  )
}

export default Guestbook

function GuestBookForm(){
  const user = false;

  if(user){
    return(
      <div>
        <h1>hello</h1>
      </div>
    )
  }

  return (
    <div className="flex justify-between  flex-col gap-4 md:flex-row">
      <input type="text" className="w-full" placeholder="your message..." />
      <Button>
        Sign for free
      </Button>
    </div>
  )
}