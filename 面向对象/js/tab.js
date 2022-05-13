var that
class Tab {
    constructor(id) {
            //获取元素
            that = this;
            this.main = document.querySelector(id);

            this.add = this.main.querySelector('.tabadd');

            this.ul = this.main.querySelector('.fisrstnav ul:first-child');
            this.fsection = this.main.querySelector('.tabscon')
            this.init()
        }
        //初始化
    init() {
            that.updateNode();
            this.add.onclick = this.addTab;
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                this.lis[i].onclick = this.toggleTab;
                this.remove[i].onclick = this.removerTab;
                this.spans[i].ondblclick = this.editTab;
                this.sections[i].ondblclick = this.editTab;
            }
        }
        //获取li和section
    updateNode() {
            this.lis = this.main.querySelectorAll('li');
            this.sections = this.main.querySelectorAll('section');
            this.remove = this.main.querySelectorAll('.icon-guanbi');
            this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')
        }
        //切换功能
    toggleTab() {
            that.clearClass();
            this.className = 'liactive';
            that.sections[this.index].className = 'conactive'

        }
        //清除样式
    clearClass() {
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = '';
                this.sections[i].className = '';

            }

        }
        //添加功能
    addTab() {
            that.clearClass();
            //添加li的section
            var random = Math.random()
            var li = '<li class="liactive"><span>测试1</span> <span class="iconfont icon-guanbi"></span> </li>';
            var section = ' <section class="conactive">' + random + '</section>';

            that.ul.insertAdjacentHTML('beforeend', li);
            that.fsection.insertAdjacentHTML('beforeend', section);
            that.updateNode();
            that.init();
        }
        //删除功能
    removerTab(e) {
        e.stopPropagation();
        var index = this.parentNode.index;
        console.log(index);
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        if (document.querySelector('.liactive')) return;
        index--
        that.lis[index] && that.lis[index].click();
    }

    //修改功能
    editTab() {
        var str = this.innerHTML;
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str;
        input.select(); //处于选定状态
        input.onblur = function() {
            this.parentNode.innerHTML = this.value;
        };
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                this.blur()
            }
        }
    }
}
new Tab('#tab')