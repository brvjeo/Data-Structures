#ifndef BSearchTree_hpp
#define BSearchTree_hpp

#include <stdio.h>
#include "BTNode.hpp"

namespace DataStructures {
template<class T1,class T2> class BSearchTree {
    BTNode<T1,T2>* head;
public:
    BSearchTree<T1,T2>();
    ~BSearchTree<T1,T2>();
    
    void insert(T1* key, T2* value);
    T2* find(T1* key);
    void remove(T1* key);
};
};
#endif
