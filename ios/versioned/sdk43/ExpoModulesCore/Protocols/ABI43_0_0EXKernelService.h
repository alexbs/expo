// Copyright © 2015 650 Industries. All rights reserved.

#import <Foundation/Foundation.h>

// Protocol that must be implemented by Kernel Services that want to be registered in Module Registry

@protocol ABI43_0_0EXKernelService <NSObject>

+ (instancetype)sharedInstance;
+ (NSString *)name;

@end
