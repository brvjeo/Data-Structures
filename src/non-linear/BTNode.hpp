#ifndef BTNode_hpp
#define BTNode_hpp

#include <stdio.h>
namespace DataStructures {
template<class T1, class T2> class BTNode {
public:
    BTNode* left;
    BTNode* right;
    T1* key;
    T2* value;
    
    BTNode<T1,T2>();
    ~BTNode<T1,T2>();
};
template<class T1,class T2> BTNode<T1,T2>::BTNode(){
    left = right = NULL;
    key = NULL;
    value = NULL;
}
template<class T1,class T2> BTNode<T1,T2 >::~BTNode(){
    left = right = NULL;
    delete key;
    delete value;
}
};
#endif
