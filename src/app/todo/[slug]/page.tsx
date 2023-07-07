const app = [
    {
        title: "cooking",
        detail: "chicken soup",
    },
    {
        title: "eating",
        detail: "snacks",
    },

]







export default function ({params}:any) {
    const slug = params.slug;
    function get_detail_from_title(){
        if (slug){
            const app_item = app.find(item => item.title == slug );
            if (app_item){
                return app_item.detail;
            }

        }
        return "todo not found";
    }
    return (
        <main>
{get_detail_from_title()}
        </main>
    )
}