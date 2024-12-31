import React from "react";
import ProjectComments from "@/app/(dashboard-pages)/projects/[id]/_components/ProjectComments";

const ProjectSummary = () => {
  return (
    <div className="px-1 py-2 md:flex md:gap-10">
      <div className="space-y-9">
        <div className="flex gap-8 w-full">
          <div className="space-y-3">
            <h4 className="font-semibold">Client:</h4>
            <h4 className="font-semibold">Priority:</h4>
            <h4 className="font-semibold">Deadline:</h4>
            <h4 className="font-semibold">Billing:</h4>
          </div>
          <div className="space-y-3 flex-grow">
            <p className="text-muted-foreground">Client Name</p>
            <p className="lg:w-11/12 text-muted-foreground">High</p>
            <p className="text-muted-foreground">9 Jan, 2024</p>
            <p className="text-muted-foreground">$50/hour</p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold">Description</h4>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            soluta eaque debitis cum doloremque nobis praesentium porro sequi
            sed suscipit, vitae aspernatur dignissimos excepturi recusandae!
            Itaque totam blanditiis illo nihil voluptatibus ipsa maiores aliquid
            neque ipsam in fugiat officiis explicabo nostrum, tempora quasi
            nesciunt asperiores quos atque sit sapiente, dolor numquam vero.
            Soluta qui eaque excepturi, et quis provident nisi corrupti alias
            aliquid dolore minima quia ipsa minus cupiditate harum quo ratione,
            dolorem, nostrum hic eum ipsum laborum! Sit, accusamus distinctio.
            Quidem architecto nihil saepe ut temporibus aspernatur iure hic
            officiis ab optio? Ipsa exercitationem, adipisci minus ipsum quod
            aliquid eius dolores itaque sint ex cum voluptatum dicta qui
            inventore distinctio! Porro, tempora ad cum illo eos sequi
            aspernatur velit.
          </p>
        </div>

        <div className="block lg:hidden">
          <ProjectComments />
        </div>

        <div className="w-full flex-col md:flex-row flex gap-9">
          <div className="md:w-1/2 h-60 border rounded-xl shadow-sm p-5">
            <h4 className="font-semibold">Status Overview</h4>
          </div>
          <div className="md:w-1/2 h-60 border rounded-xl shadow-sm p-5">
            <h4 className="font-semibold">Priority Breakdown</h4>
          </div>
        </div>

        <div className="border p-5 rounded-xl shadow-sm">
          <h4 className="font-semibold">Activity</h4>
        </div>
      </div>

      <div className="flex-shrink-0 hidden lg:block w-1/3">
        <ProjectComments />
      </div>
    </div>
  );
};

export default ProjectSummary;
