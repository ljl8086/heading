'use strict';

/* Directives */


angular.module('myApp.directives', [])
.directive('pagination', function(){
    return {
        restrict: 'E',
        scope: {
            recordCount: '@',     
            currPage: '@',
            paginationSize: '=',
            pageSize: '=',
            onSelectPage: '&'
        },
        
        template: '<ul class="pagination">'
            +'<li ng-class="{disabled: noPreviousPage()}">'
            +'<a ng-click="selectPreviousPage()">上一页</a>'
            +'</li>'
            
            +'<li ng-repeat="page in pages" ng-class="{active: isActivePage(page)} ">'
            +'<a ng-click="selectPage(page)">{{page}}</a>'
            +'</li>'
            
            +'<li ng-class="{disabled: noNextPage()}">'
            +'<a ng-click="selectNextPage()">下一页</a>'
            +'</li>'
    
            +'</ul>',
    
        replace: true,
        link: function(s,elm,attrs){
        	//页码数量
        	var paginationSize = attrs.paginationSize ? attrs.paginationSize : 10;
        	//每页显示数据条数
        	var pageSize = attrs.pageSize ? attrs.pageSize : 10;

            s.$watch('currPage', function(value){
            	var hps = Math.floor(paginationSize / 2);
                var pageCount = Math.ceil(s.recordCount/pageSize);
            	var pos = paginationSize % 2 ==0 ? 1 : 0;
                s.pages = [];
                var start = value<= hps? 1 : value - hps;
                var end = value<=hps ? paginationSize : value + hps - pos;
                end = end>pageCount ? pageCount : end;
                for(var i=start;i<=end;i++){
                    s.pages.push(i);
                }
                
                if(s.currPage > value){
                    s.selectPage(value);
                }
            });


            //判读是否有上一页
            s.noPreviousPage = function(){
                return Number(s.currPage) === 1;
            };
            
            //判断是否有下一页
            s.noNextPage = function(){
            	var pageCount = Math.ceil(s.recordCount/pageSize);
                return Number(s.currPage) === pageCount;
            };
            
            //判断当前页是否被选中
            s.isActivePage = function(page){
                return Number(s.currPage)===page;
            };
            
            //选择页数
            s.selectPage = function(page){
                if(!s.isActivePage(page)){
                    s.currPage = page;
                    
                    s.onSelectPage( {"page":page,"pageSize":s.pageSize} );
                }
            };
            
            //选择下一页
            s.selectNextPage = function(){
                if(!s.noNextPage()){
                    s.selectPage(Number(s.currPage)+1);
                }
            };
            
            //选择上一页
            s.selectPreviousPage = function(){
                if(!s.noPreviousPage()){
                    s.selectPage(s.currPage-1);
                }
            };
        }
    };
});

