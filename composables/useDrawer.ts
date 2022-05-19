export default function () {
  const drawer = useState("drawer", () => false);
  const drawerClasses = useState("drawerClasses", () => "hidden");
  const menuClasses = useState("menuClasses", () => "");

  return {
    state: drawer,
    drawerClasses: drawerClasses,
    menuClasses: menuClasses,
    toggle: function() {
      if (this.state) {
        this.drawerClasses = "flex opacity-0";
        this.menuClasses = "close";
        setTimeout(() => {
          this.menuClasses = "";
          this.drawerClasses = "hidden opacity-0";
        }, 500);
      } else {
        this.drawerClasses = "flex opacity-0";
        this.menuClasses = "open";
        setTimeout(() => {
          this.drawerClasses = "flex opacity-100";
        }, 50);
        setTimeout(() => {
          this.menuClasses = "";
        }, 500);
      }
      
      this.state = !this.state;
    },
  };
}