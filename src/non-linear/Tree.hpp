#ifndef Tree_hpp
#define Tree_hpp


#include <stdio.h>
#include <iostream>

using namespace std;
namespace DataStructures {
template<class T> class Tree {
public:
    void pre_order(T* tree);
    void in_order(T* tree);
    void post_order(T* tree);
};
template<class T> void Tree<T>::pre_order(T *tree){
}
template<class T> void Tree<T>::in_order(T *tree){
}
template<class T> void Tree<T>::post_order(T *tree){
}
};
#endif
